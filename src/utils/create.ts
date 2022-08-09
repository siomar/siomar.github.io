interface IProps {
  [name: string]: string;
}

export function create(name: string, props: IProps, children?: HTMLElement[]): HTMLElement {
  const el = document.createElement(name);

  const attrs = Object.entries(props);
  for (let [key, value] of attrs) {
    el.setAttribute(key, value);
  }

  children && el.append(...children);

  return el;
}
