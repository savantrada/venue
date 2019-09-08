import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';
import music from '../../resources/imagind.mp3';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>

            <div className="artist_name">
                <div className="wrapper">
                    Imagin Dragons
                </div>
            </div>
           
            <TimeUntil/>
                <audio autoPlay controls style={{marginLeft: '38%', position: 'absolute', marginTop:'2%'}}>
                    <source src={music}  type="audio/mpeg"/>
                </audio>
        </div>
    );
};

export default Featured;