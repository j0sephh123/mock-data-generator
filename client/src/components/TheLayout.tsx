import { AppShell } from "@mantine/core";

type Props = {
  children: React.ReactNode;
  headerSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
  mainSlot?: React.ReactNode;
};

export default function TheLayout({
  children,
  footerSlot,
  headerSlot,
}: Props) {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>{headerSlot}</AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer p="md">
        {footerSlot}
      </AppShell.Footer>
    </AppShell>
  );
}
