import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const dashboardRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    const overview = {
      invested: '10,00,000.23',
      value: '10,00,000.97',
      pnl: '1,00,000.74',
      pnlPct: '29.14%'
    };

    const treemap = [
      { label: 'Equity (MF)', value: 63.14 },
      { label: 'Debt (MF)', value: 18.30 },
      { label: 'ETF', value: 13.78 },
      { label: 'Equity', value: 10.95 },
      { label: 'Debt', value: 10.14 },
      { label: 'Gold', value: 7.61 }
    ];

    const sectors = [
      { label: 'Financials', value: 24.01 },
      { label: 'Large Cap', value: 39.52 },
      { label: 'Small Cap', value: 1.30 },
      { label: 'Materials', value: 8.38 },
      { label: 'Information', value: 6.75 },
      { label: 'Consumers', value: 6.67 },
      { label: 'Industrial', value: 6.67 }
    ];

    const stocks = [
      { name: 'ICICIBANK', value: 3.70 },
      { name: 'RELIANCE', value: 2.92 }
    ];

    const el = (tag, cls, text = '') => {
      const e = document.createElement(tag);
      if (cls) e.className = cls;
      if (text) e.textContent = text;
      return e;
    };

    function renderOverview() {
      const wrap = el('div', 'overview');
      const mkBox = (label, val) => {
        const box = el('div', 'metric');
        box.append(el('span', 'label', label));
        box.append(el('span', 'amt', val));
        return box;
      };
      wrap.append(mkBox('Invested', overview.invested));
      wrap.append(mkBox('Present value', overview.value));
      wrap.append(mkBox('Unrealized P&L', `${overview.pnl} (${overview.pnlPct})`));
      return wrap;
    }

    function renderSearchBar() {
        const container = el('div', 'search-container');
        const input = el('input', 'search-input');
        input.placeholder = 'Search for mutual Funds';
        const button = el('button', 'search-button', 'Search');

        button.onclick = async () => {
            const query = input.value;
            if (!query) return;

            try {
                const response = await fetch(`https://api.mfapi.in/mf/search?q=${query}`);
                if (!response.ok) throw new Error('No schemes found. Please try another query.');
                const data = await response.json();
                renderSearchResults(data);
            } catch (error) {
                renderSearchResults([{ fund_house: error.message, scheme_name: '' }]);
            }
        };

        container.append(input);
        container.append(button);
        return container;
    }

    function renderSearchResults(results) {
        let container = document.querySelector('.search-results-container');
        if (!container) {
            container = el('div', 'search-results-container');
            const searchSection = document.querySelector('.search-container');
            searchSection.insertAdjacentElement('afterend', container);
        }

        container.innerHTML = ''; // Clear previous results

        if (results.length === 0) {
            container.append(el('p', 'no-results', 'No results found.'));
            return;
        }

        results.forEach(item => {
            const card = el('div', 'result-card');
            card.append(el('h4', 'result-title', item.schemeName));
            card.append(el('p', 'result-meta', `Scheme Code: ${item.schemeCode}`));
            card.onclick = () => fetchSchemeDetails(item.schemeCode);
            container.append(card);
        });
    }

    async function fetchSchemeDetails(schemeCode) {
        try {
            const response = await fetch(`https://api.mfapi.in/mf/${schemeCode}`);
            if (!response.ok) throw new Error('Could not fetch scheme details.');
            const data = await response.json();
            renderSchemeDetails(data);
        } catch (error) {
            renderSearchResults([{ fund_house: error.message, scheme_name: '' }]);
        }
    }

    function renderSchemeDetails(data) {
        const container = document.querySelector('.search-results-container');
        container.innerHTML = ''; // Clear previous results

        const card = el('div', 'details-card');
        const meta = data.meta;
        const lastNav = data.data[0];

        card.append(el('h2', 'details-title', meta.scheme_name));
        card.append(el('p', 'details-meta', meta.fund_house));

        const stats = el('div', 'details-stats');
        stats.append(el('p', '', `NAV: ₹${lastNav.nav}`));
        stats.append(el('p', '', `Date: ${lastNav.date}`));
        card.append(stats);

        container.append(card);
    }

    function renderTreemap() {
      const wrap = el('div', 'treemap');
      wrap.append(el('h3', '', 'Allocation'));
      treemap.forEach(it => {
        const bar = el('div', 'bar');
        bar.style.width = `${it.value}%`;
        bar.style.background = pickColor(it.label);
        bar.append(el('span', 'tag', `${it.label} (${it.value}%)`));
        wrap.append(bar);
      });
      return wrap;
    }

    function renderSectors() {
      const wrap = el('div', 'sector-list');
      wrap.append(el('h3', '', 'Sectors'));
      sectors.forEach(s => {
        const row = el('div', 'row');
        row.append(el('span', 'name', s.label));
        row.append(el('span', 'val', `${s.value}%`));
        wrap.append(row);
      });
      return wrap;
    }

    function renderStocks() {
      const wrap = el('div', 'stock-list');
      wrap.append(el('h3', '', 'Top Stocks'));
      stocks.forEach(s => {
        const row = el('div', 'row');
        row.append(el('span', 'name', s.name));
        row.append(el('span', 'val', `${s.value}%`));
        wrap.append(row);
      });
      return wrap;
    }

    const colors = [
      '#4CAF50', '#2196F3', '#FF9800', '#9C27B0',
      '#F44336', '#009688', '#795548', '#607D8B'
    ];
    let colorIndex = 0;
    function pickColor() {
      return colors[colorIndex++ % colors.length];
    }

    if (dashboardRef.current) {
      dashboardRef.current.innerHTML = ''; // Clear previous content
      dashboardRef.current.append(renderOverview());
      dashboardRef.current.append(renderSearchBar());
      dashboardRef.current.append(renderTreemap());
      dashboardRef.current.append(renderSectors());
      dashboardRef.current.append(renderStocks());
    }
  }, []);

  return (
    <div>
      <div className="profile-icon" onClick={() => setShowLogout(!showLogout)}>
        ZV
        {showLogout && (
          <div className="logout-menu">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      <div id="dashboard" ref={dashboardRef}></div>
    </div>
  );
};

export default Dashboard;
