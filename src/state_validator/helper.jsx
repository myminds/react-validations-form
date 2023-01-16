import React from 'react'
export const errorChecker = (err_obj) => {
    return Object.keys(err_obj).find((key) => err_obj[key] !== "") || ""
}

export const showError = (error) => {
    if (error)
        return error
}