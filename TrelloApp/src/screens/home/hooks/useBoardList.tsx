import { useState, useEffect, useMemo } from 'react';
import { handlerOnToast, ToastType } from '../../../components';
import { GetBoards } from '../services/getBoards';

export const useBoardsList = () => {
  const [boardsData, setBoardsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetBoards = async () => {
    try {
      setLoading(true);
      const boards = await GetBoards();
      if (boards) setBoardsData(boards);
    } catch (error) {
      handlerOnToast(ToastType.Error, 'Lo sentimos, no pudímos listar tus tableros');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { handleGetBoards(); }, []);

  return useMemo(() => ({ boardsData, loading, handleGetBoards }), [boardsData, loading]);
};
