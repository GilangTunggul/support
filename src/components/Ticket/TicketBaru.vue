<template>
  <div class="card" v-bind:class="{'bg-danger': status == 1, 'bg-warning': status == 2, 'bg-success': status == 3}">
    <img v-if="assignedTo == 1" class="card-img-top" src="../assets/grant.jpg" alt="Card image cap">
    <img v-if="assignedTo == 2" class="card-img-top" src="../assets/jake.jpg" alt="Card image cap">
    <img v-if="assignedTo == 3" class="card-img-top" src="../assets/ashley.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title text-white">{{ taskName }}</h5>
      <p class="card-text text-white">{{ taskDetails }}</p>
      <div class="input-group input-group-lg">
        <select class="form-control" v-model="status">
          <option value="1">Pending</option>
          <option value="2">Active</option>
          <option value="3">Complete</option>
        </select>
      </div>
      <span class="input-group input-group-lg" v-if="status == 2">
        <label class="text-white">Assigned to:
        <select class="form-control" v-model="assignedTo">
          <option value="1">New Ticket</option>
          <option value="2">All Ticket</option>
          <option value="3">View Ticket</option>
        </select>
        </label>
      </span>
      <span v-if="status == 3">
        <button class="btn btn-md btn-warning" v-on:click="rmTask(id)">X</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewComponent',
  props: {
    taskName: String,
    taskDetails: String,
    id: Number,
    rmTask: Function
  },
  data:  function() {
    return{
      name: this.taskName,
      desc: this.taskDetails,
      status: 1,
      assignedTo: 0
    }
  },
  // methods: {
  //   filterTasks: function() {
  //     console.log(this);
  //   }
  // }
}
</script>
<style scoped>
</style>