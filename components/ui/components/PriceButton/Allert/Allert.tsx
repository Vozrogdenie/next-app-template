import { IconCheck } from '@tabler/icons-react';
import { Notification, rem } from '@mantine/core';

const Allert = () => {
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  return (
    <>
      <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
        Order sucsefully
      </Notification>
    </>
  );
};

export default Allert;
