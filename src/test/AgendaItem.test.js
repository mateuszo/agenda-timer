import AgendaItem from "../model/AgendaItem";

const getItem = () => {
    return new AgendaItem.Builder().withName("testitem").withDuration(10).build();
};


test('test AgendaItemModel', () => {
        const item = getItem();
        expect(item.name).toBe("testitem");
        expect(item.duration).toBe(10);
    }
);

test('AgendaItemModel id is unique', () => {
        const item = getItem();
        const item2 = getItem();
        expect(item2.id).not.toBe(item.id);
    }
);

test('AgendaItemModel timeLeft is duration by default', () => {
    const item = getItem();
    expect(item.timeLeft).toEqual(item.duration);

});

test('AgendaItemModel timeLeft', () => {
    const item = new AgendaItem.Builder().withName("testitem").withDuration(10).withTimeLeft(9).build();
    expect(item.timeLeft).not.toEqual(item.duration);
});

test('AgendaItemModel mutation throws an error', () => {
    const item = getItem();
    expect(() => item.timeLeft--).toThrow(TypeError);
});

test('AgendaItemModelBuilder fromAgendaItem clones an object', () => {
    const item = getItem();
    const builder = new AgendaItem.Builder();
    builder.fromAgendaItem(item);
    expect(builder.name).toEqual(item.name);
});

test('AgendaItemModel setName creates new instance', () => {
    const item = getItem();
    const item2 = item.setName("newname");
    expect(item).not.toBe(item2);
    expect(item.name).toBe("testitem");
    expect(item2.name).toBe("newname");
    expect(item2.id).toBe(item.id);
    expect(item2.duration).toBe(item.duration);
});


test('AgendaItemModel setDuration creates new instance', () => {
    const item = getItem();
    const item2 = item.setDuration(9);
    expect(item).not.toBe(item2);
    expect(item.duration).toBe(10);
    expect(item2.duration).toBe(9);
});

test('AgendaItemModel tick creates new instance', () => {
    const item = getItem();
    const item2 = item.tick();
    expect(item).not.toBe(item2);
});

test('AgendaItemModel tick decreases timeLeft by one', () => {
    const item = getItem();
    const item2 = item.tick();
    expect(item2.timeLeft).toBe(item.timeLeft - 1);
});


