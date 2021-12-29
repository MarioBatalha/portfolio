import React from "react";

import './style.scss';

export const Image = Props => {
    return (
        <img {...Props}  alt={Props} />
    )
}