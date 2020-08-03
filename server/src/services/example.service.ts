import Example from '../schemas/example';

export async function createExample (name) {
    const client = new Example({name: name});
    await client.save();
}