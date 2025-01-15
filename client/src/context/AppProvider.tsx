import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";

type UserProps = {
  id: number;
  username: string;
  email: string;
};

interface AppContextProps {
  user: UserProps;
  cart: number[];
  setCart: Dispatch<SetStateAction<number[]>>;
  updateUser: (user: Partial<UserProps>) => void;
  addToCart: (productId: number) => void;
  removeFromCart: (id: number) => void;
  apiUrl: string;
  stripeKey: string;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within an AppProvider");
  return context;
};

export default function AppProvider({ children }: { children: ReactNode }) {
  const apiUrl = import.meta.env.VITE_API_URL as string;
  const stripeKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY as string;

  const [user, setUser] = useState<UserProps>({
    id: 1,
    username: "Adrian Fernandez",
    email: "adrianfdz2021@gmail.com",
  });

  const [cart, setCart] = useState<number[]>([]);

  // Cargar carrito desde localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Guardar carrito en localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateUser = (newUserData: Partial<UserProps>) => {
    setUser((prev) => ({ ...prev, ...newUserData }));
  };

  const addToCart = (productId: number) => {
    if (!cart.includes(productId)) {
      setCart((prevCart) => [...prevCart, productId]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((id) => id !== productId));
  };

  const value: AppContextProps = {
    user,
    cart,
    setCart,
    updateUser,
    addToCart,
    removeFromCart,
    apiUrl, 
    stripeKey
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
