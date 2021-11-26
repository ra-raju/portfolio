import React from 'react';
import './About.css';

const PersonalInfo = () => {
  return (
    <div className="skill-container">
      <h2 className="secondary-heading">Personal Info</h2>
      <hr className="hr-row" />

      <table>
        <tbody>
          <div className="table-section">
            <div className="first-table table">
              <tr className="tr">
                <td className="table-title">Name: </td>
                <td className="table-value">Robeyoul Awal Raju</td>
              </tr>
              <tr>
                <td className="table-title">Age: </td>
                <td className="table-value">23</td>
              </tr>
              <tr>
                <td className="table-title">Nationality: </td>
                <td className="table-value">Bangladeshi</td>
              </tr>
              <tr>
                <td className="table-title">Email: </td>
                <td className="table-value">robeyoulawal@gmail.com</td>
              </tr>
              <tr>
                <td className="table-title">Phone: </td>
                <td className="table-value">+8801867100385</td>
              </tr>
              <tr>
                <td className="table-title">Language: </td>
                <td className="table-value">
                  <span className="lang">Bangla</span>{' '}
                  <span className="lang">English</span>
                </td>
              </tr>
            </div>
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default PersonalInfo;
