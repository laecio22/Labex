import React from 'react'
import HomePage from '../pages/HomePage/HomePage'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function Router() {
  return (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                   <HomePage />
                </Route>
                <Route exact path="/trips/create">
                   <CreateTripPage />
                </Route>
                <Route exact path="/trips/details">
                   <TripDetailsPage/>
                </Route>
                <Route exact path="/trips/details/:idTrip">
                   <TripDetailsPage/>
                </Route>
                <Route exact path="/login">
                   <LoginPage />
                </Route>
                <Route exact path="/trips/list">
                   <ListTripsPage/>
                </Route>
                <Route exact path="/application-form">
                   <ApplicationFormPage />
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>             
        </BrowserRouter> 

    </div>
  );
}

export default Router;
