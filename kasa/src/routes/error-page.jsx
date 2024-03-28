import MainLayout from '../layouts/MainLayout';
import { Navigate } from "react-router-dom";

export default function ErrorPage() {
  return (
    <MainLayout>
      <div className="error-page">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n&apos;existe pas.</p>
        <a href="/">Retourner sur la page d&apos;accueil</a>
      </div>
    </MainLayout>
  );
}
