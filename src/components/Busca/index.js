import { useEffect } from 'react';
import styles from './Busca.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { mudarBusca, resetarBusca } from '../../store/reducers/busca';
import { useLocation } from 'react-router-dom';

export default function Busca() {
  const dispatch = useDispatch();
  const busca = useSelector(state => state.busca);
  const location = useLocation();

  useEffect(() => {
    dispatch(resetarBusca())
  }, [location.pathname, dispatch])

  return(
    <div className={styles.busca}>
      <input  
        className={styles.input}
        placeholder="O que você procura ?"
        value={busca}
        onChange={e => dispatch(mudarBusca(e.target.value))}
      />
    </div>
  );
}