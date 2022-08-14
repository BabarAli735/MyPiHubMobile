import Storage from '@react-native-async-storage/async-storage';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { dark, light } from '../constants';
import {
  ARTICLES, BASKET, CATEGORIES, FOLLOWING, NOTIFICATIONS, RECOMMENDATIONS, TRENDING, USERS
} from '../constants/mocks';



export const DataContext = React.createContext({});

export const DataProvider = ({children}) => {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState(light);
  const [user, setUser] = useState(USERS[0]);
  const [basket, setBasket] = useState(BASKET);
  const [users, setUsers] = useState(USERS);
  const [following, setFollowing] = useState(FOLLOWING);
  const [trending, setTrending] = useState(TRENDING);
  const [categories, setCategories] = useState(CATEGORIES);
  const [recommendations, setRecommendations] =
    useState(RECOMMENDATIONS);
  const [articles, setArticles] = useState(ARTICLES);
  const [article, setArticle] = useState({});
  const [notifications, setNotifications] =
    useState(NOTIFICATIONS);

  // get isDark mode from storage
  const getIsDark = useCallback(async () => {
    // get preferance gtom storage
    const isDarkJSON = await Storage.getItem('isDark');

    if (isDarkJSON !== null) {
      // set isDark / compare if has updated
      setIsDark(JSON.parse(isDarkJSON));
    }
  }, [setIsDark]);

  // handle isDark mode
  const handleIsDark = useCallback(
    (payload) => {
      // set isDark / compare if has updated
      setIsDark(payload);
      // save preferance to storage
      Storage.setItem('isDark', JSON.stringify(payload));
    },
    [setIsDark],
  );

  // handle users / profiles
  const handleUsers = useCallback(
    (payload) => {
      // set users / compare if has updated
      if (JSON.stringify(payload) !== JSON.stringify(users)) {
        setUsers({...users, ...payload});
      }
    },
    [users, setUsers],
  );

  // handle basket
  const handleBasket = useCallback(
    (payload) => {
      // set basket items / compare if has updated
      if (JSON.stringify(payload) !== JSON.stringify(basket)) {
        const subtotal = payload?.items?.reduce((total, item) => {
          total += (item.price || 0) * (item.qty || 1);
          return total;
        }, 0);
        setBasket({...basket, ...payload, subtotal});
      }
    },
    [basket, setBasket],
  );

  // handle user
  const handleUser = useCallback(
    (payload) => {
      // set user / compare if has updated
      if (JSON.stringify(payload) !== JSON.stringify(user)) {
        setUser(payload);
      }
    },
    [user, setUser],
  );

  // handle Article
  const handleArticle = useCallback(
    (payload) => {
      // set article / compare if has updated
      if (JSON.stringify(payload) !== JSON.stringify(article)) {
        setArticle(payload);
      }
    },
    [article, setArticle],
  );

  // handle Notifications
  const handleNotifications = useCallback(
    (payload) => {
      // set notifications / compare if has updated
      if (JSON.stringify(payload) !== JSON.stringify(notifications)) {
        setNotifications(payload);
      }
    },
    [notifications, setNotifications],
  );

  // get initial data for: isDark & language
  useEffect(() => {
    getIsDark();
  }, [getIsDark]);

  // change theme based on isDark updates
  useEffect(() => {
    setTheme(isDark ? dark : light);
  }, [isDark]);

  const contextValue = {
    isDark,
    handleIsDark,
    theme,
    setTheme,
    user,
    users,
    handleUsers,
    handleUser,
    basket,
    handleBasket,
    following,
    setFollowing,
    trending,
    setTrending,
    categories,
    setCategories,
    recommendations,
    setRecommendations,
    articles,
    setArticles,
    article,
    handleArticle,
    notifications,
    handleNotifications,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
