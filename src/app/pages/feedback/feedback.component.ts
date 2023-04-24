import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/shared/models/Feedback';
import { FeedbackService } from 'src/app/shared/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  constructor(private formBuilder: FormBuilder, private feedbackService: FeedbackService, private router: Router){}

  feedbacks?: Feedback[];
  topFeedbacks?: Feedback[];

  feedbackForm = this.createForm({
    name: '',
    text: '',
    menoseg: 1
  });

  createForm(fb: Feedback) {
    let feedbackFormGroup = this.formBuilder.group(fb);
    feedbackFormGroup.get('name')?.addValidators([Validators.required]);
    feedbackFormGroup.get('menoseg')?.addValidators([Validators.required]);
    feedbackFormGroup.get('text')?.addValidators([Validators.required, Validators.minLength(5)]);
    return feedbackFormGroup;
  }

  ngOnInit(): void {
    this.feedbackService.getAll().subscribe(value => {
      this.feedbacks = value;
    });

    this.feedbackService.getTop10Feedback().subscribe(value => {
      this.topFeedbacks = value;
    });

  }

  ngOnChanges(): void {
    this.feedbackService.getAll().subscribe(value => {
      this.feedbacks = value;
    });

    this.feedbackService.getTop10Feedback().subscribe(value => {
      this.topFeedbacks = value;
    });

  }

  sendFeedback() {
    if (this.feedbackForm.valid) {
      if (this.feedbackForm.get('name') && this.feedbackForm.get('text')) {
        const feedback: Feedback = {
          name: this.feedbackForm.get('name')?.value as string,
          text: this.feedbackForm.get('text')?.value as string,
          menoseg: this.feedbackForm.get('menoseg')?.value as number,
        };

        this.feedbackService.create(feedback).catch(error => {
          console.error(error);
        });
      }
    }
    this.router.navigateByUrl("/feedback");
  }

}
