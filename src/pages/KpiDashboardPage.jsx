import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { clearKpiStore, readKpiStore } from '../analytics/kpiStore.js';

function formatPercent(value) {
  if (!Number.isFinite(value)) return '—';
  return `${(value * 100).toFixed(1).replace('.', ',')} %`;
}

function KpiTable({ title, totals }) {
  const rows = Object.entries(totals || {}).sort((a, b) => b[1] - a[1]);

  return (
    <article className="card-soft">
      <h2 className="section-title">{title}</h2>
      {rows.length === 0 ? (
        <p className="section-sub">Aucune donnée pour le moment.</p>
      ) : (
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Événement</th>
                <th scope="col">Occurrences</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([eventName, count]) => (
                <tr key={eventName}>
                  <td>
                    <code>{eventName}</code>
                  </td>
                  <td>{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </article>
  );
}

export default function KpiDashboardPage() {
  const [version, setVersion] = useState(0);

  const store = useMemo(() => readKpiStore(), [version]);
  const totals = store.totals || {};
  const bySegment = store.bySegment || {};

  const pageViews = totals.page_view || 0;
  const addToCart = totals.add_to_cart || 0;
  const beginCheckout = totals.begin_checkout || 0;
  const purchase = totals.purchase || 0;

  const purchaseRate = beginCheckout > 0 ? purchase / beginCheckout : NaN;
  const checkoutStartRate = addToCart > 0 ? beginCheckout / addToCart : NaN;

  const handleClear = () => {
    clearKpiStore();
    setVersion((v) => v + 1);
  };

  return (
    <div className="page">
      <Helmet>
        <title>Dashboard KPI – GrEco</title>
        <meta
          name="description"
          content="Dashboard KPI de démonstration (données locales) pour illustrer le tracking et le pilotage business de GrEco."
        />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="canonical" href="https://gr-eco.vercel.app/kpi" />
      </Helmet>

      <header className="page-header">
        <p className="page-kicker">Pilotage</p>
        <h1 className="page-title">Dashboard KPI (démo)</h1>
        <p className="page-lead">
          Cette page illustre une <strong>table de KPI</strong> et une <strong>segmentation</strong>{' '}
          à partir des événements de la couche <code>dataLayer</code>. Les compteurs sont stockés
          localement dans votre navigateur.
        </p>
      </header>

      <section className="section">
        <div className="grid grid-2">
          <article className="card-soft">
            <h2 className="section-title">Tunnel principal</h2>
            <ul className="list-muted">
              <li>
                <strong>page_view</strong> : {pageViews}
              </li>
              <li>
                <strong>add_to_cart</strong> : {addToCart}
              </li>
              <li>
                <strong>begin_checkout</strong> : {beginCheckout}
              </li>
              <li>
                <strong>purchase</strong> : {purchase}
              </li>
            </ul>
            <div className="card-soft" style={{ marginTop: '1rem' }}>
              <p className="section-sub" style={{ marginBottom: 0 }}>
                Conversion <code>begin_checkout → purchase</code> : <strong>{formatPercent(purchaseRate)}</strong>
                <br />
                Activation <code>add_to_cart → begin_checkout</code> : <strong>{formatPercent(checkoutStartRate)}</strong>
              </p>
            </div>
          </article>

          <article className="card-soft">
            <h2 className="section-title">Segmentation</h2>
            <p className="section-sub">
              Segment utilisé : <code>user_segment</code> = <strong>guest</strong> ou <strong>auth</strong>.
            </p>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Segment</th>
                    <th scope="col">page_view</th>
                    <th scope="col">add_to_cart</th>
                    <th scope="col">begin_checkout</th>
                    <th scope="col">purchase</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(bySegment).length === 0 ? (
                    <tr>
                      <td colSpan={5}>Aucune donnée segmentée pour le moment.</td>
                    </tr>
                  ) : (
                    Object.entries(bySegment).map(([segment, events]) => (
                      <tr key={segment}>
                        <td>
                          <code>{segment}</code>
                        </td>
                        <td>{events.page_view || 0}</td>
                        <td>{events.add_to_cart || 0}</td>
                        <td>{events.begin_checkout || 0}</td>
                        <td>{events.purchase || 0}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <p className="note">
              Mise à jour : {store.updatedAt ? new Date(store.updatedAt).toLocaleString('fr-FR') : '—'}
            </p>
            <button type="button" className="btn btn-outline" onClick={handleClear}>
              Réinitialiser les compteurs
            </button>
          </article>
        </div>
      </section>

      <section className="section">
        <KpiTable title="Événements (total)" totals={totals} />
      </section>
    </div>
  );
}

