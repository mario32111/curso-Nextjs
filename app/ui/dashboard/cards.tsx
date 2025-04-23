import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { montserrat } from '@/app/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}

      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
    </>
  );
}

export async function Card({
  title,
  type,
}: {
  title: string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];
  let data;
  switch (type) {
    case 'invoices':
      data = (await fetchCardData()).numberOfInvoices;
      break;
    case 'customers':
      data = (await fetchCardData()).numberOfCustomers;
      break;
    case 'pending':
      data = (await fetchCardData()).totalPaidInvoices;
    case 'collected':
      data = (await fetchCardData()).totalPendingInvoices;
      break;
  }
  
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${montserrat.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {data}
      </p>
    </div>
  );
}
