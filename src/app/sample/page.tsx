import { ChatWidget } from '@/components/wizard/ChatWidget';

interface PageProps {
  params: Promise<{ [key: string]: string | string[] | undefined }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ChatWidgetPage(props: PageProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  // Extract props from searchParams if needed, or use defaults
  const botName = (searchParams.botName as string) || 'Sarah';
  const avatar = searchParams.avatar as string | undefined;
  const primaryColor = (searchParams.primaryColor as string) || '#4a90e2';
  const companyName = searchParams.companyName as string | undefined;
  const step = searchParams.step ? parseInt(searchParams.step as string) : undefined;

  return (
    <ChatWidget
      botName={botName}
      avatar={avatar}
      primaryColor={primaryColor}
      companyName={companyName}
      step={step}
    />
  );
}

