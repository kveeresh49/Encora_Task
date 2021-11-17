
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { ContactsService } from '../services/contacts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  $user = this.userService.getUser();

  companies: any[] = [];

  selectedCompany: any;

  company: any;

  contacs: any[] = [];
  closeModal: string='';

  contactForm!: FormGroup;

  create = false;
  title: string = '';
  id:any;

  constructor(private userService: UserService, private companyService: CompanyService, private contactsService: ContactsService,private formBuilder: FormBuilder,) { }

  async ngOnInit() {
    this.companies = await this.companyService.getAll();
    this.contacs = await this.contactsService.getAll();
  }

  getCompany(data:any){
    this.company = this.companies.find(company => company.id === data.value);
  }

  initFormContact(){
    this.contactForm = this.formBuilder.group({
      name: [''],
      country: [''],
      phone: [''],
    });
  }

  initFormContactFull(data:any){
    this.contactForm = this.formBuilder.group({
      name: [data.name],
      country: [data.country],
      phone: [data.phone],
    });
  }

  add() {
    this.create = true;
    this.title = 'Add Contact';
    this.initFormContact();
  }

  edit(item:any) {
    this.create = true;
    this.id = item.id; 
    console.log(this.id)
    this.title = 'Edit Contact';
    this.initFormContactFull(item);

  }

  update(){
    if(this.id){
      const {name, country, phone} = this.contactForm.value;
      console.log(this.contactForm.value)
      let find = this.contacs.find(company => company.id === this.id);
      console.log(this.contacs)
      find.name = name;
      find.country = country;
      find.phone = phone;
      this.id = null;
      this.create = false;
    }else{
      const {name, country, phone} = this.contactForm.value;
      this.contacs.push({name, country, phone});
      this.create = false;
    }
  }

  delete(index:number) {
    this.contacs.splice(index, 1);
  }

  logout(){
    this.userService.logOut();
  }

  get name() {
    return this.contactForm.get('name');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get phone() {
    return this.contactForm.get('phone');
  }



}
