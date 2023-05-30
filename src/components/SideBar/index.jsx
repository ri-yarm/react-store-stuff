import { NavLink } from 'react-router-dom';
import './SideBar.less';
import { useSelector } from 'react-redux';

const SideBar = () => {
  const {list} = useSelector(({categories}) => categories)
console.log(list);
  const sideElement = list.map(({id, name}) => (
    <li key={id}>
      <NavLink
      className={({isActive}) => `link ${isActive ? 'active' : ''}`}
       to={`/categories/${id}`}>{name}</NavLink>
    </li>
  ))

  return (
    <section className="sidebar">
      <h2 className="title">CATEGORIES</h2>
      <nav>
        <ul className="menu">
          {sideElement}
        </ul>
      </nav>
      <div className="side-footer">
        <a href="help" target="_blank" className="link">
          help
        </a>
        <a href="help" target="_blank" className="link">
          Правила
        </a>
      </div>
    </section>
  );
};

export default SideBar;
