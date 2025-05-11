import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import pricingList from './pricingList.json';
import styles from './Pricing.module.sass'

const Pricing = () => {
  return (
    <div>
      <Header />
      <ul>
        {pricingList.map((p, i) => (
          <li key={i}>
            {
              <article>
                <div style={{ border: `10px solid ${p.color}` }}>
                  <h3 style={{ color: `${p.color}` }}>{p.type}</h3>
                  <p>{p.describeType}</p>
                  <p style={{ color: `${p.color}` }}>{p.price}</p>
                </div>
                <div>
                  {p.profit.map((pr, i) => (
                    <p className={styles.body} data-tooltip={pr.tooltip}>{pr.body}</p>
                  ))}
                </div>
                <Link style={{ background: `${p.color}` }} to="/startContest">
                  Start
                </Link>
              </article>
            }
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Pricing;
