import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57812.06729803197!2d-80.33107069503532!3d43.35267231844653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1567918010874!5m2!1sen!2sca" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;