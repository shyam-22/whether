import React,{Component} from 'react';

import "./style.css";

class Whether extends Component
{
    wConfig =
        {
            winter:
            {
                title:'Its very very...... cold Outside',
                icon :'far fa-snowflake'
            },
            summer:
            {
                title:'Its very very...... Hot Outside',
                icon:'fas fa-umbrella-beach'
            },
            monsoon:
            {
                title:'Its very very...... Cloudy Outside',
                icon:'fas fa-cloud-sun-rain'
            }
            
        };
    constructor(props)
    {
        super(props);
        console.log(this.props);
    };
    wReport(Latitude,month)
    {
        if(month > 2 && month < 9)
        {
            return Latitude > 1 ? "summer" : "monsoon"
        }
        else
        {
            return Latitude >1 ? "winter" : "summer"
        }
    };

    render()
    {
        const season = this.wReport(this.props.Latitude, new Date().getMonth());
        const {title,icon} =this.wConfig[season];
        console.log(title,icon);
        if(season === "summer")
        {
            return(
                <div className = "container">
                    <div className = "row">
                        <div>
                            <i className={icon} aria-hidden="true"></i>
                    <h1>{title}</h1>
                    <i className={icon} aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            )
        };

        if(season==="winter")
        {
            return(
                <div className = "container">
                    <div className = "row">
                        <div className ="col-md-6">
                        <i className={icon} aria-hidden="true"></i>
                        <h1>{title}</h1>
                        <i className={icon} aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            )
        }

        else
        {
            return(
                <div className = "container">
                    <div className = "row">
                        <div className ="col-md-6">
                        <i className={icon} aria-hidden="true"></i>
                        <h1>{title}</h1>
                        <i className={icon} aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            )
        };
        
    }
};

export default Whether;