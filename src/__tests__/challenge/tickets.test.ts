import { tickets } from "../../challenge/tickets";

describe('Función tickets', () => {
  it('debería devolver "SI" cuando la cola sea [25, 25, 50]', () => {
    expect(tickets([25, 25, 50])).toBe('SI');
  });

  it('debería devolver "NO" cuando la cola sea [25, 100]', () => {
    expect(tickets([25, 100])).toBe('NO');
  });

  it('debería devolver "NO" cuando la cola sea [25, 25, 50, 50, 100]', () => {
    expect(tickets([25, 25, 50, 50, 100])).toBe('NO');
  });

  it('debería devolver "SI" cuando la cola sea [25, 50, 25, 50, 25, 50, 25, 100]', () => {
    expect(tickets([25, 50, 25, 50, 25, 50, 25, 100])).toBe('SI');
  });

  it('debería devolver "NO" cuando la cola sea [50, 25]', () => {
    expect(tickets([50, 25])).toBe('NO');
  });
});
