import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Typography } from "@material-ui/core";

import "./OptionsCard.scss";

interface OptionCardProps {
    title: string;
    subtitle: string;
    pathImage: string;
    goToRoute: string;
}

export const OptionCard = ({ title, subtitle, pathImage, goToRoute }: OptionCardProps) => {
    
    const historyRoutes = useHistory();

    const handleClick=()=>{
        historyRoutes.push(goToRoute);
    }

    return (
        <Card onClick={handleClick} className="contentOptionCard">
            <div className="description">
                <Typography variant="caption" display="block" gutterBottom>
                    <strong>
                        {title}
                    </strong>
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {subtitle}
                </Typography>
            </div>
            <img src={pathImage} alt="" />
        </Card>
    );
};
