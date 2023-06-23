// material
import { Container } from '@mui/material';

import AccounTransactionTable from 'components/table/AccounVouncherTable';
import Page from 'components/Page';

// ----------------------------------------------------------------------

export default function AccountTransactionList() {
  return (
    <Page title="Ví Vouncher | Krowd">
      <Container maxWidth={false}>
        <AccounTransactionTable />
      </Container>
    </Page>
  );
}
