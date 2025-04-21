import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { montserrat } from '@/app/fonts';
import { Suspense } from 'react';
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from '../ui/skeletons';
 
export default async function Page() {
    //a partir de aqui corregir
    /* const totalPaidInvoices = revenue.reduce((acc, month) => acc + month.revenue, 0);
    const totalPendingInvoices = latestInvoices.reduce((acc, invoice) => acc + invoice.amount, 0);
    const numberOfInvoices = latestInvoices.length;
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
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
         <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />  */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={RevenueChartSkeleton()}>
            <RevenueChart />
        </Suspense>
        <Suspense fallback={LatestInvoicesSkeleton()}>
            <LatestInvoices/>
        </Suspense>
      </div>
    </main>
  );
}
