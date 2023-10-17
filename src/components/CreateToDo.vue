<script setup>
import { ref, reactive, computed } from "vue";
import { TODO_STORAGE_KEY, PER_PAGE } from "../constants";
import { useCommonStore } from "../store/common.store";
import { storeToRefs } from "pinia";
import PaginationCom from "./PaginationCom.vue";

const props = defineProps(["all_ToDos"]);
const emit = defineEmits(["update:all_ToDos"]);

const currentPage = ref(1);

const setCurrentPage = (page) => {
  currentPage.value = page;
};

const store = useCommonStore();
const { IntialSearchValue } = storeToRefs(store);

const currentToDo = reactive({
  title: "",
  description: "",
  id: "",
});

const addTask = ref(false);

const addTodo = () => {
  if (currentToDo.title.trim() !== "") {
    currentToDo.id = currentToDo.title + Math.random() * Math.random();
    props.all_ToDos.push({ ...currentToDo });
    currentToDo.title = "";
    currentToDo.description = "";
    currentToDo.id = "";
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(props.all_ToDos));
    emit("update:all_ToDos", props.all_ToDos.value);
  }
};

const handleCancel = () => {
  currentToDo.title = "";
  currentToDo.description = "";
  currentToDo.id = "";
};

const handleAddTask = () => {
  addTask.value = true;
};

const activeButtonClass = computed(() => {
  return currentToDo.title.trim() !== "" ? "opacity-100" : "opacity-50";
});

const filteredTodos = computed(() => {
  return IntialSearchValue.value === ""
    ? props.all_ToDos
    : props.all_ToDos.filter((todo) =>
        todo.title.toLowerCase().includes(IntialSearchValue.value.toLowerCase())
      );
});

// const handleDelete = (index) => {
//   console.log({filtered : filteredTodos.value, allToDo: props.all_ToDos})
//   if (index >= 0 && index < props.all_ToDos.length) {
//     props.all_ToDos.splice(index, 1);
//     localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(props.all_ToDos));
//     console.log({allToDo: props.all_ToDos})
//     emit("update:all_ToDos", props.all_ToDos);
//   }
// };

const handleDelete = (id) => {
  console.log({ filtered: filteredTodos.value, allToDo: props.all_ToDos });

  const index = props.all_ToDos.findIndex((todo) => todo.id === id);

  console.log({ index, id });

  if (index !== -1) {
    props.all_ToDos.splice(index, 1);
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(props.all_ToDos));
    console.log({ allToDo: props.all_ToDos });
    emit("update:all_ToDos", props.all_ToDos);
  }
};

// const handleEdit = (event, selectedToDo) => {
//   console.log({event, id: selectedToDo.id})
// }

const filterData = (key, order) => {
  return props.all_ToDos.sort((a, b) => {
    switch (order) {
      case "asc":
        return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
      case "desc":
        return a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0;
      default:
        return 0;
    }
  });
};

const totalPages = computed(() => {
  return Math.ceil(filteredTodos.value.length / PER_PAGE);
});

const validatedCurrentPage = computed(() => {
  let newPage = Math.max(currentPage.value, 1);

  newPage = Math.min(newPage, totalPages.value);

  return newPage;
});

const startEndIndices = computed(() => {
  let start = (validatedCurrentPage.value - 1) * PER_PAGE;
  let end = Math.min(start + PER_PAGE - 1, filteredTodos.value.length - 1);

  return { start, end };
});

const computedIndices = computed(() => {
  const indices = [];
  if (startEndIndices.value.end >= 0 || startEndIndices.value.start >= 0) {
    for (
      let i = startEndIndices.value.start;
      i <= startEndIndices.value.end;
      i++
    ) {
      indices.push(i);
    }
  }

  return indices;
});

const filteredData = ref(filterData("title", ""));

const handleFilter = (key, order) => {
  filteredData.value = filterData(key, order);
};

//Unused function
const onPageChange = (newPage) => {
  page.value = newPage;
};
</script>

<template>
  <section class="w-full md:w-1/2 text-black">
    <div>
      <span class="p-2 font-bold text-xl">ToDo List</span>

      <button
        v-if="!addTask"
        @click="handleAddTask"
        class="flex items-center p-2 text-m group"
      >
        <div
          class="flex justify-center items-center text-red-600 w-5 h-5 text-center text-xl group-hover:bg-red-600 group-hover:text-white rounded-full transition duration-300"
        >
          <span>+</span>
        </div>
        <span class="group-hover:text-red-600 pl-2">Add task</span>
      </button>
      <div
        class="border-2 border-grey-500 rounded-lg text-left p-4 mt-4"
        v-else-if="addTask"
      >
        <div>
          <input
            type="text"
            placeholder="Task Name"
            v-model="currentToDo.title"
            class="w-full p-2 focus:outline-none focus:border-transparent"
          />

          <input
            type="text"
            placeholder="Description"
            v-model="currentToDo.description"
            class="w-full p-2 focus:outline-none focus:border-transparent"
          />
        </div>

        <div
          class="flex justify-end mt-4 border-t-[2px] border-gray-300 w-full"
        >
          <button
            class="bg-gray-100 p-2 m-2 rounded-lg opacity-50"
            :class="activeButtonClass"
            @click="handleCancel"
          >
            Reset
          </button>
          <button
            class="bg-red-600 pl-4 pr-4 m-2 rounded-lg text-white"
            :class="activeButtonClass"
            @click="addTodo"
          >
            Add task
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-end p-2" v-if="totalPages !== 0">
      <button @click="handleFilter('title', 'asc')" class="p-2">
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/50/generic-sorting-2.png"
          alt="generic-sorting-2"
        />
      </button>
      <button @click="handleFilter('title', 'desc')" class="p-2">
        <img
          class="rotate-180"
          width="20"
          height="20"
          src="https://img.icons8.com/ios/50/generic-sorting-2.png"
          alt="generic-sorting-2"
        />
      </button>
    </div>
    <div
      v-for="index in computedIndices"
      :key="filteredTodos[index]?.id"
      class="flex flex-row w-full border-b-[2px] mt-4 mb-4 rounded justify-between p-4 items-center"
    >
      <div class="flex flex-col gap-2 w-full justify-start text-left">
        <span>
          <strong>{{ filteredTodos[index]?.title }}</strong>
        </span>
        <span>{{ filteredTodos[index]?.description }} </span>
      </div>
      <!-- <div class="cursor-pointer pr-4" @click="(event) => handleEdit(event, filteredTodos[index])"> 
        <img width="20" height="20" src="https://img.icons8.com/windows/32/edit--v1.png" alt="edit--v1"/>
      </div> -->
      <div
        class="cursor-pointer"
        @click="() => handleDelete(filteredTodos[index]?.id)"
      >
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/50/trash--v1.png"
          alt="trash--v1"
        />
      </div>
    </div>
    <PaginationCom
      v-if="totalPages !== 0"
      :currentPage="validatedCurrentPage"
      :totalPages="totalPages"
      @update:currentPage="setCurrentPage"
    />
    <div
      v-else-if="IntialSearchValue === ''"
      class="pt-10 font-semibold text-l text-red-400"
    >
      Add tasks. See them here! 📝👀
    </div>
    <div v-else class="pt-10 font-semibold text-l text-red-400">
      No results found! Add tasks first. 📝🔍
    </div>
  </section>
</template>
