import '@styles/tailwind.css';
import MainLayout from '@layout/MainLayout';
import { ProviderAuth } from '@hooks/useAuth';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
      
    </>
  )
}
