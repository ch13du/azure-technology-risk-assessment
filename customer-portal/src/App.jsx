
import { useState } from "react";
import "./App.css";

const initialClaims = [
  {
    id: "CLM-1001",
    type: "Medical Expense",
    status: "Under Review"
  }
];

export default function App() {
  const [claims, setClaims] = useState(initialClaims);

  function submitClaim() {
    const newClaim = {
      id: `CLM-${1001 + claims.length}`,
      type: "General Insurance Claim",
      status: "Submitted"
    };

    setClaims([...claims, newClaim]);
  }

  return (
    <main className="portal">
      <header>
        <h1>MapleShield Life</h1>
        <p></p><p>Customer Insurance Portal</p>
      </header>

    

      <section className="card">
        <h2>Customer Profile</h2>
        <p><strong>Name:</strong> Alex Morgan</p>
        <p><strong>Customer ID:</strong> CUS-1001</p>
        <p><strong>Email:</strong> alex@example.com</p>
      </section>

      <section className="card">
        <h2>My Insurance Policy</h2>
        <p><strong>Policy:</strong> POL-2026-001</p>
        <p><strong>Type:</strong> Life Insurance</p>
        <p><strong>Status:</strong> Active</p>
        <p><strong>Coverage:</strong> CAD $250,000</p>
      </section>

      <section className="card">
        <h2>Insurance Claims</h2>
        {claims.map((claim) => (
          <p key={claim.id}>
            {claim.id} | {claim.type} | {claim.status}
          </p>
        ))}
        <button onClick={submitClaim}>
          Submit Sample Claim
        </button>
      </section>

      <footer>
        MapleShield Life | Technology Risk Assessment Lab
      </footer>
    </main>
  );
}
