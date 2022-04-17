import React, { useState } from "react";
import "../App.css";

export default function Home() {

    const [data, setData] = useState();
    
  return (
    <div>
      <h1>Home</h1>

      <div>
        <table>
          <thead>
            <tr>
              <td>S.No</td>
              <td>Type</td>
              <td>Block</td>
              <td>Flat No</td>
              <td>Tenants</td>
            </tr>
          </thead>

          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  );
}
