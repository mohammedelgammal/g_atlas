import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store";
import { useShallow } from "zustand/react/shallow";

export default (searchTerm: string, delay: number = 500): string => {
  const navigate = useNavigate();
  const { search, setSearch } = useStore(
    useShallow((state) => ({
      setSearch: state.setSearch,
      search: state.search,
    }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm !== search) {
        navigate("/");
        setSearch(searchTerm);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [searchTerm, delay]);

  return searchTerm;
};
