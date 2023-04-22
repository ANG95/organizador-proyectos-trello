import { useState, useEffect, useMemo } from 'react';
import { handlerOnToast, ToastType } from '../../../components';
import { GetBoardColumns } from '../services/getBoardColumns';
import { GetBoard } from '../services/getBoard';

export const useBoardItems = (idBoard: string) => {
  const [boardDataItems, setBoardDataItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetBoardItems = async () => {
    try {
      setLoading(true);
      const boards = await GetBoard(idBoard);
      const fillBoardItems = await Promise.all(
        boards.lists.map(async (boardList) => {
          const items = await GetBoardColumns(boardList.id);
          const boardListPush = { ...boardList, boardItems: items };
          return boardListPush;
        })
      );
      if (boards) setBoardDataItems({ ...boards, lists: fillBoardItems });
    } catch (error) {
      handlerOnToast(ToastType.Error, 'Lo sentimos, no pudímos listar datos del tablero selecionado');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { handleGetBoardItems(); }, []);

  return useMemo(() => ({ boardDataItems, loading, handleGetBoardItems }), [boardDataItems, loading]);
};
