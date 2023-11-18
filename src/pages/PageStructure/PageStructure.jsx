
import SideMenu from '../../components/SideMenu/SideMenu'
import History from '../History/History';
import Panel from '../Panel/Panel';
import RegisterUser from '../RegisterUser/RegisterUser';
import styles from './PageStructure.module.css'

import {
    BrowserRouter as Router,
    Switch,
    Route 
  } from "react-router-dom";
const PageStructure = () => {
  return (
    <div className={styles.pageStructure}>
        <Router> 
            <Switch> 
                <Route exact path="/"> 
                    <>
                        <SideMenu selected="PANEL"/>
                        <div className={styles.content}><Panel/></div>
                    </>
                </Route>
                <Route path="/history"> 
                    <>
                        <SideMenu selected="HISTORY"/>
                        <div className={styles.content}><History/></div>
                    </>
                </Route>

                <Route path="/registerUser"> 
                    <>
                        <SideMenu selected="REGISTER"/>
                        <div className={styles.content}><RegisterUser/></div>
                    </>
                </Route>


            </Switch>
        </Router>
    </div>
  )
}

export default PageStructure