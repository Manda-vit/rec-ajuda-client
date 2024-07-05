
import React from 'react';

import './styles.css';

interface InfoCardProps {
  title: string;
  leftItems: string[];
  rightItems: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({ title, leftItems, rightItems }) => {
  return (
    <div className="info-card">
        <h5>{title}</h5>
        <div className="_content">
            <div className="_left">
                {leftItems.map((item, i) => <span key={i} className='_item'>{item}</span>)}
            </div>
            <div className="_right">
                {rightItems.map((item, i) => <span key={i} className='_item'>{item}</span>)}
            </div>
        </div>
    </div>
  );
}

export default InfoCard;
