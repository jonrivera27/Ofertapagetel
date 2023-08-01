import React from 'react'

export const Menu = () => {
  return (
    <nav className="navbar navbar-default" style={{backgroundColor: '#495a73'}}>
        <div className="container-fluid">
            <div className="navbar-header" >
                <a className="navbar-brand" href="#">
                    <img alt="Brand" src="./logo.png" style={{ width: '100px', height: '50px', }} />
                </a>
            </div>
        </div>
    </nav>
  )
}