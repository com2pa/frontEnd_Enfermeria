import { Button, HStack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';


export const calendary = () => {
   
  const { headers, body, month, year, navigation } = useCalendar({
    defaultViewType: CalendarViewType.Week
  });
   
  return (
    <>
        
      <HStack justify="space-between">
        <HStack>
          <Button onClick={navigation.toPrev}>&lt;</Button>
          <Text>{format(new Date(year, month), "MMM yyyy")}</Text>
          <Button onClick={navigation.toNext}>&gt;</Button>
        </HStack>
        <Button onClick={navigation.setToday}>Today</Button>
      </HStack>
      <Table>
        <Thead>
          <Tr>
            {headers.weekDays.map(({ key, value }) => {
              return <Th key={key}>{format(value, "E")}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {body.value.map(({ key, value: days }) => (
            <Tr key={key}>
              {days.map(({ key, value }) => (
                <Td key={key} color={isToday(value) ? "red.500" : "inherit"}>
                  {getDate(value)}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>

  );
  
};

export default calendary;