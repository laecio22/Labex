
 export const goToHome = (history) =>{
    history.push('/')
}  

export const goToForm = (history) =>{
    history.push('/application-form')
}

export const goToLoginPage = (history) =>{
    history.push('/login')
}

export const goToListTripsPage = (history) =>{
    history.push('/trips/list')
}

export const goToCreateTripPage = (history) =>{
    history.push('/trips/create')
  
}

export const goToTripDetailsPage = (history) =>{
    history.push('/trips/details')
}

export const showTripDetails = (history, idTrip) =>{
    history.push('/trips/details/'+ idTrip)
}

export const replaceToLoginPage = (history) =>{
    history.replace('/login')
}

export const logout = (history) =>{
      localStorage.removeItem("token")
      const token = localStorage.getItem("token")
      if (!token){
        replaceToLoginPage(history)
    }
      
}