import React from 'react'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'

const Topic = () => {
    let {topic} = useParams();

    return(
    <div>
        <h4>{topic}</h4>
    </div>);
}

const ReactTopics = () => {
    //const match = useRouteMatch();
    //console.log(match);
    //dentro de match:
    //'path' nos permite construir rutas relativas <Route>.
    //'url' nos permite construir enlaces relativos <Link> o <NavLink>

    const {url, path} = useRouteMatch();
  return (
    <div>
      <h3>React Topics</h3>
      <ul>
        <li>
            <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
            <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
            <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
            <Link to={`${url}/componentes`}>Componentes</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
            <h4>Elige un tema de react</h4>
        </Route>
        <Route path={`${path}/:topic`} component={Topic}/>
      </Switch>
    </div>
  )
}

export default ReactTopics
