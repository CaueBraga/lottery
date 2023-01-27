import * as Select from "@radix-ui/react-select";

export function Dropdown({ lotos, setSelectedLotoId }: any) {
  return (
    <Select.Root
      onValueChange={(value) => {
        setSelectedLotoId(value);
      }}
    >
      <Select.Trigger className="mt-10 md:mt-0 w-52 bg-white py-3 px-4 rounded-lg font-medium text-font text-sm flex justify-between items-center">
        <Select.Value placeholder="CONCURSOS" />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="text-font bg-white py-3 px-4 rounded text-sm flex justify-between">
          <Select.ScrollUpButton />
          <Select.Viewport>
            {lotos.map((element: any) => {
              return (
                <Select.Item
                  key={element.id}
                  className="focus:cursor-default rounded-sm pl-1"
                  value={element.id}
                >
                  <Select.ItemText>
                    {element.nome.toUpperCase()}
                  </Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              );
            })}
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
