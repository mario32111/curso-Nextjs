import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { montserrat } from '@/app/fonts';
import { Suspense } from 'react';
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '../ui/skeletons';

export default async function Page() {

  //a partir de aqui corregir
  /* const totalPaidInvoices = revenue.reduce((acc, month) => acc + month.revenue, 0);
  const totalPendingInvoices = latestInvoices.reduce((acc, invoice) => acc + invoice.amount, 0);
  
  const numberOfCustomers = latestInvoices.reduce((acc, invoice) => {
      if (!acc.includes(invoice.customer_id)) {
          acc.push(invoice.customer_id);
      }
      return acc;
  }, []).length;
*/
  return (
    <main>
      <h1 className={`${montserrat.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={CardSkeleton()}>
          <Card title="Collected" type="collected" />
        </Suspense>
        <Suspense fallback={CardSkeleton()}>
          <Card title="Pending" type="pending" />
        </Suspense>
        <Suspense fallback={CardSkeleton()}>
          <Card title="Total Invoices" type="invoices" />
        </Suspense>
        <Suspense fallback={CardSkeleton()}>
          <Card
            title="Total Customers"
            type="customers"
          />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={RevenueChartSkeleton()}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={LatestInvoicesSkeleton()}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
