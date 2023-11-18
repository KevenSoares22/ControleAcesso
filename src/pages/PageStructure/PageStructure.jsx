
import SideMenu from '../../components/SideMenu/SideMenu'
import styles from './PageStructure.module.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const PageStructure = () => {
  return (
    <div className={styles.pageStructure}>
        <Router> 
            <Switch> 
                <Route exact path="/"> 
                    <>
                        <SideMenu selected="PANEL"/>
                        <div className={styles.content}></div>
                    </>
                </Route>
                <Route path="/history"> 
                    <>
                        <SideMenu selected="HISTORY"/>
                        <div className={styles.content}></div>
                    </>
                </Route>

                <Route path="/registerUser"> 
                    <>
                        <SideMenu selected="REGISTER"/>
                        <div className={styles.content}></div>
                    </>
                </Route>


            </Switch>
        </Router>
    </div>
  )
}

export default PageStructure