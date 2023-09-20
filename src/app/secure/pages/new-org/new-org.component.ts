import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Organization } from '../../models/billable.model';
import { OrgService } from '../../services/org.service';

@Component({
  selector: 'app-new-org',
  templateUrl: './new-org.component.html',
  styleUrls: ['./new-org.component.css']
})
export class NewOrgComponent {

  public model: any = {};

  constructor(private orgService: OrgService, private router: Router) { }

  public onSubmit() {
    alert(JSON.stringify(this.model));
    if (!this.validateInput(this.model)) {
      //TODO show validation message on html
      return;
    } 

    const org: Organization = {
      name: this.model.orgname,
      gstin: this.model.gstin,
      logo: this.model.logo,
      address: {
        toName: this.model.addressTo,
        line1: this.model.addressLine1,
        line2: this.model.addressLine2,
        city:  this.model.city,
        state: this.model.state,
        pincode: this.model.pincode,
        phone: this.model.phone,
        emailId: this.model.enmail
      }
    }


    this.orgService.saveOrg(this.model).subscribe(res => {
      alert(res);
      this.router.navigateByUrl('/home');
    })
  }

  private validateInput(input: any): boolean {
    return true;
  }




}
