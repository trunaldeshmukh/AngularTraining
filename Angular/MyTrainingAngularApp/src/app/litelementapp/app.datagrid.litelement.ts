import { LitElement, customElement, property, css } from 'lit-element';
import { render, html } from 'lit-html/lib/shady-render';

const tableCss = css`#products {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  #products td, #products th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #products tr:nth-child(even){background-color: #f2f2f2;}

  #products tr:hover {background-color: #ddd;}

  #products th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
  }`;
@customElement('datagrid-element')
export class DataGridElement extends LitElement {
    @property({ type: Array }) collection;
    @property({ type: Array }) headers;

    static get styles() {
        return [
            tableCss,
            css`
      div {color: green; }
  ` ];
    }

    constructor() {
        super();
        // console.log(this.headers);
    }
    getHeaders() {
        this.headers = Object.keys(this.collection[0]);
        const header: string = this.headers[0];
        console.log(header.match('[A-Z]+'));
        return this.headers;
    }
    render() {
        return html
            `<h1>My Data Grid lit Element</h1>
            <div>
            <table id="products">
            <thead>
            <th>Select</th>
            ${this.getHeaders().map(i => html`<th>${i}</th>`)}
            <thead>
            <tbody>
            ${this.collection.map(i => html`<tr>${html`<td><input type="checkbox" ></td>
            ${Object.values(i).map(c => html`<td>${c}</td>`)}`}</tr>`)}
            </tbody>
            </table>
            </div>`;
    }
}
