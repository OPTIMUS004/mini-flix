import { Component } from '@angular/core';


@Component ({
	selector: 'app-footer',
    template: `
        <footer>
            <small class="flex-container text-dark">
            <p>All rights reserved: &copy; Integral 2019</p>
            </small>
        </footer>
    `,
    styles: [`
                .flex-container{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-item: center;
                    height: 100px;
                    background: #f1f1f1;
                    padding-top: 5%;
                    width: 100%;
                }
            `]
})
export class FooterComponent{}