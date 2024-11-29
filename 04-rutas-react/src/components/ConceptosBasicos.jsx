import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Acerca from '../pages/Acerca'
import Contacto from '../pages/Contacto'
import Home from '../pages/Home'
import Error404 from '../pages/Error404'
import MenuConceptos from './MenuConceptos'
import Usuario from '../pages/Usuario'
import Productos from '../pages/Productos'
import { Redirect } from 'react-router-dom/cjs/react-router-dom'
import ReactTopics from '../pages/ReactTopics'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import PrivateRoute from './PrivateRoute'
import { HashRouter, Link } from 'react-router-dom/cjs/react-router-dom.min'

const ConceptosBasicos = () => {
  return (
    
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/acerca' component={Acerca} />
          <Route exact path='/contacto' component={Contacto} />
          <Route path='*' component={Error404} />
        </Switch>

      </HashRouter>
      <hr/>
      <h2>Conceptos Básicos</h2>
      <Router>
        <MenuConceptos/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/acerca' component={Acerca} />
          <Route exact path='/contacto' component={Contacto} />
          <Route exact path='/about'>
            <Redirect to='/acerca'/>
          </Route>
          <Route exact path='/contact'>
            <Redirect to='/contacto'/>
          </Route>
          <Route exact path='/usuario/:username' component={Usuario} />
          <Route exact path='/productos' component={Productos} />
          <Route path='/react' component={ReactTopics} />
          <Route path='/login' component={Login} />
          {/* <Route path='/dashboard' component={Dashboard} /> */}
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <Route path='*' component={Error404}  />
        </Switch>
      </Router>
    </div>
  )
}

/* const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <Switch>
          <Route exact path='/acerca'>
            <Acerca/>
          </Route>
          {/* <Route  exact path='/contacto' component={Contacto} /> 
          <Route  exact path='/contacto' children={<><Contacto/><p>Contacto2</p></>} />
          <Route exact path='/'>
            <h3>Home</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  )
} */

export default ConceptosBasicos
