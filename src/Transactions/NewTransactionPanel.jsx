import Button from "../Button/Button";
import React, {useState} from "react";

const NewTransactionPanel = ({ isClicked, onClickHandler }) => {
    return (
        <div>
            <Button
                label={isClicked ? 'Cancel ' : 'Import Transaction'}
                variant="primary"
                className="buttonExample"
                onClickHandler={() => {
                    console.log('Button clicked!');
                    onClickHandler(!isClicked);
                }}
            />
        </div>
    )
};

export default NewTransactionPanel;
