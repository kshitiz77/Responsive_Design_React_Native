import AsyncStorage from "@react-native-async-storage/async-storage";

// set user details function
export const setUserData = (data) => {
  console.log(data)
  data = JSON.stringify(data);
  return AsyncStorage.setItem('userData', data);
}

// remove user details function
export const removeUserData = async (data) => {
  try {
    await AsyncStorage.removeItem('userData')
  } catch (error) {
    console.log(error)
  }
}

// get user details function
export const getUserData = async () => {
  try {
    const userData = await AsyncStorage.getItem('userData')
    return userData != null ? JSON.parse(userData) : null;
  } catch (e) {
    console.log("user_data get error")
  }
}


// set userTodolist details Function
export const setToDoDetails = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('toDoDetails', jsonValue)
    return jsonValue
  } catch (e) {
    console.log("add_data store error")
  }
}

// get userTodolist details Function
export const getToDoDetails = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('toDoDetails')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("add_data get error")
  }
}



