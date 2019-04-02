import AgendaItem from "../model/AgendaItem";
import Item from "../components/Item";


const setUp = () => {
    const item = new AgendaItem.Builder().withName("testitem").withDuration(10).build();
    const updateItem = jest.fn();
    const props = {
        item: item,
        updateItem: updateItem};
    return {
        component: new Item(props),
        updateItem: updateItem,
    }
};


test('Item component handleDurationChange calls updateItem', () => {
    //arrange
    const { component, updateItem } = setUp();
    const minutes = 6;
    const event = {target: {value: minutes}};

    //act
    component.handleDurationChange(event);

    //assert
    expect(updateItem.mock.calls.length).toBe(1);
});


test.skip('Item component handleDurationChange modifies the item', () => {
    //arrange
    const { component, updateItem } = setUp();
    const minutes = 6;
    const event = {target: {value: minutes}};

    //act
    component.handleDurationChange(event);

    //assert
    expect(updateItem.mock.calls[0][0].duration).toBe(minutes*60);
});